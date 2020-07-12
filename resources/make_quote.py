
def make_quote(): 
    out = []
    inner = []
    file_object  = open("quotes.txt", "r", encoding="utf8") 
    for line in file_object:
        sentence = (line.split(' '))
        sentence_nospace = []
        for i in sentence:     
            sentence_nospace.append(i.replace('\n', ''))
        out.append(sentence_nospace)
    print(out)
   # print(len(out))

make_quote()