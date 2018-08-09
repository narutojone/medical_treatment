module Api
  class FormulationIngredientController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      formulationsIngredients = Ingredient.order('name');
      render json: formulationsIngredients.to_json();
    end
    def show
      formulationsIngredients = FormulationIngredient.select("*").joins(:ingredient).where('formulation_id = ?', params[:id])
      render json: formulationsIngredients.to_json()
    end

    def create

      html = "<html>
        <head>
          <meta charset='UTF-8'>
          <title>Medical Treatment</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: white;
              font-size: 50px;
              font-family: Georgia, serif;
            }
            .header {
              font-size: 70px;
            }
          </style>
        </head>
        <body>
          <p class='header'>Medical Treatment</p>
          <p><b>Name:</b> #{params[:name]}</p>
          <p><b>Address:</b> #{params[:address]}</p>
          <p><b>Formulation:</b> #{params[:formulation]}</p>
          <p><b>Ingredients:</b></p>
          #{params[:ingredients]}
        </body>
      </html>"

      currentTime = Time.now.strftime("%d-%m-%Y %H:%M:%S")
      
      PDFKit.new(html, :page_size => 'A4').to_file("public/pdf/#{params[:name]}#{currentTime}.pdf")

      render json: { url: "/#{params[:name]}#{currentTime}.pdf" }
    end
  end
end
