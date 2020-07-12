def make_array(): 
    out = []
    file_object  = open("wordsv2.txt", "r", encoding="utf8") 
    
    #print(file_object.read())
    for line in file_object:
        word = []
        string = ""
        out.append(line.partition(' ')[0].replace('\n', ''))
       # string = i.split(" ", 1)[0]
    # out.append(string)
    print(out)
    print(len(out))

make_array()