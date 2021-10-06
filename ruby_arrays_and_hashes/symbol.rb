#symbol is denoted with colon in front :im_a_symbol
#symbols are immutable but the value they point to can be mutable

#change key into symbol or string

p "hello".to_sym #this will change it into a symbol
p :hello.to_s #this will change it into a string

#writing a symbol
:i_am_a_symbol
#:i-am-not-a-symbol => invalid
#:i stuff => invalid
#:"this can also work" => valid but not good practise

