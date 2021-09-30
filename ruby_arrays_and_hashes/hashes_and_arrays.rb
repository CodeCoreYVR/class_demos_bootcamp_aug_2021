#hashes can store arrays as key value pairs
my_hash =  {  "abc"  =>  [1,  2,  3],  "xyz"  =>  [4,  5]  }

#arrays can store hashes as elements
my_array =  [  "abc",  {  "a"  =>  1,  "b"  =>  2  },  false  ]

my_hash2 = { 'BC' => ['Vancouver', 'Richmond'],  'AB' => ['Edmonton', 'Calgary']}

my_hash2.each do |key, values|
    puts "#{key}:#{values.join(', ')}"
end

#Store a list of students with their hobbies:
student_list = {
    0 => {
        "name" => "Brett",
        "age" => 30,
        "hobbies" => ["programming", "beach volleyball"]
    }
}
   