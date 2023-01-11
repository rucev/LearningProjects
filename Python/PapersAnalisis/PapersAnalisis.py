from tika import parser 
import re
from collections import Counter 
import matplotlib.pyplot as plt; plt.rcdefaults() 
import numpy as np 
import cv2
from PIL import Image

def CreateWordList(textInput):
	WordListRaw = "".join([letter for letter in textInput if not letter.isdigit()]) # Eliminate numbers in the text
	WordList = re.split(r"\W+", WordListRaw) # Split text in words
	return WordList

def ImportStopWordList(docInput):
	p = open(docInput, "r") # Asuming that in the same folder that this program is saved there is also a text document "stopwordlist.txt"
	StopWords = (p.read())
	StopWordsList = CreateWordList (StopWords) # Create a list with all the stop Word
	return StopWordsList


def SplitList1(listInput): # Create function to separate elements that come in pairs (returning the first pair)
	Item1 = [item[0] for item in listInput]
	return Item1

def SplitList2(listInput): # Create function to separate elements that come in pairs (returning the second pair)
	Item2 = [item[1] for item in listInput]
	return Item2

def FindKeyWords(textInput):
	text = textInput.lower() # Ignore capital letters
	WordList = CreateWordList (text)   # Create wordList of words in the text
	StopWordsList = ImportStopWordList("stopwordlist.txt")
	FilteredSentence = []   # Create a list to add the non stop words, and add them through a loop
	for word in WordList: 
	    if word not in StopWordsList: 
	        FilteredSentence.append(w)
	Count = Counter(FilteredSentence) # Count frequencies on the text without the stop words
	Freq = Count.most_common(10) # Select the top 10
	KeyWords = SplitList1(Freq)
	return KeyWords

def FindKeyWordsFreq(textInput):
	text = textInput.lower() # Ignore capital letters
	WordList = CreateWordList (text)   # Create wordList of words in the text
	StopWordsList = ImportStopWordList("stopwordlist.txt")
	FilteredSentence = []   # Create a list to add the non stop words, and add them through a loop
	for w in WordList: 
	    if w not in StopWordsList: 
	        FilteredSentence.append(w)
	Count = Counter(FilteredSentence) # Count frequencies on the text without the stop words
	Freq = Count.most_common(10) # Select the top 10
	KeyWordsFreq = SplitList2(Freq)
	return KeyWordsFreq


# Open both documents
data = parser.from_file("document1.pdf")
text1 = data["content"]
data = parser.from_file("document2.pdf")
text2 = data["content"]


# Creat the .txt containing the frequency of the citations
AuthorYears1 = re.findall(r"\([A-Z].*?,.*[0-9]\)", text1) # Find all citations considering that in APA format they are (Author, Year)
Citations1=[] # Create a list to put all the citations
for sublist1 in AuthorYears1:
    Citations1.append(sublist1)
for citation1 in Citations1: # Use a loop to count frequencies
    CitationFreq1 = Counter(Citations1)
with open("Document 1 Counter of citations.txt", "w") as output1: # Save the list in a .txt
    output1.write(str(CitationFreq1))
# Repit the process for the second document
AuthorYears2 = re.findall(r"\([A-Z].*?,.*[0-9]\)", text2) 
Citations2=[] 
for sublist2 in AuthorYears2:
    Citations2.append(sublist2)
for citation2 in Citations2: 
    CitationFreq2 = Counter(Citations2)
with open("Document 2 Counter of citations.txt", "w") as output2:
    output2.write(str(CitationFreq2))


# Find KeyWords and frequencies in the texts
KeyWords1 = FindKeyWords (text1)
Freq1 = FindKeyWordsFreq (text1)
KeyWords2 = FindKeyWords (text2)
Freq2 = FindKeyWordsFreq (text2)

# Create and save as a png the graphic that shows Keywords x Frequencies, for both texts.
y_pos1 = np.arange(len(KeyWords1))  
plt.barh(y_pos1, Freq1, align="center", alpha=1) 
plt.yticks(y_pos1, KeyWords1)
plt.xlabel("Frequency")
plt.title("Document 1 Keywords")
plt.savefig("KeywordsxFrequency Document 1.png")

y_pos2 = np.arange(len(KeyWords2))  
plt.barh(y_pos2, Freq2, align="center", alpha=1) 
plt.yticks(y_pos2, KeyWords2)
plt.xlabel("Frequency")
plt.title("Document 2 Keywords")
plt.savefig("KeywordsxFrequency Document 2.png")

# Create collage with both graphics
Graph1 = cv2.imread("KeywordsxFrequency Document 1.png", cv2.IMREAD_GRAYSCALE)
Graph2 = cv2.imread("KeywordsxFrequency Document 2.png", cv2.IMREAD_GRAYSCALE)
collage = np.hstack([Graph1, Graph2])
im = Image.fromarray(collage)
im.save("Keywords x Frequency.png")
