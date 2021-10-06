movies_with_directors = {
    "Forrest Gump" => "Robert Zemeckis",
    "The Matrix" => "Tha Watchowskis",
    "Pulp Fiction" => "Quentin Tarintino",
    :Zero_Dark_Thirty => "Kathryn Bigelow"
}

#.each just like arrays
#but it expects a block of code with 2 arguments (key and value of that key)

movies_with_directors.each do |key, value|
    puts "#{key}'s director is #{value}"
end

canada = {
    "BC" => "Victoria",
    :Alberta => "Edmonton",
    :Saskatchewan => "Regina"
}

canada.each { |province, city| puts "#{province}'s capital is #{city}"}
canada.each_key {|province| p province }
canada.each_value { |city| p city}