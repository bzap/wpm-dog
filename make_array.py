


def make_array(): 
    out = []
    file_object  = open("words.txt", "r") 
    #print(file_object.read())
    for line in file_object:
        out.append(line[:-1])
    print(out)
    print(len(out))
make_array()