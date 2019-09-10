Rails.application.routes.draw do

  root 'static_d3#index'

  get '/pie-chart' => 'static_d3#pieChart', as: 'pieChart'
  get '/bar-chart' => 'static_d3#barChart', as: 'barChart'
  get '/basics' => 'static_d3#basicTutorials', as: 'basicTutorials'
  get '/sankey' => 'static_d3#sankey', as: 'sankey'
  get '/concept-map' => 'static_d3#conceptMap', as: 'conceptMap'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
