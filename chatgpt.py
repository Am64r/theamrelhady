import os
import sys 

import constants
import warnings


from langchain_community.document_loaders import TextLoader
#from langchain_community.document_loaders import DirectoryLoader
from langchain.indexes import VectorstoreIndexCreator


from langchain_core._api.deprecation import LangChainDeprecationWarning

from langchain_community.llms import openai
from langchain_community.chat_models import ChatOpenAI




warnings.filterwarnings("ignore", category=LangChainDeprecationWarning)



os.environ["OPENAI_API_KEY"] = constants.APIKEY

query = sys.argv[1]

# print(query)


loader = TextLoader("data/reference.txt")
#loader = DirectoryLoader("./data/", glob="*.txt")  #  error here with path

index = VectorstoreIndexCreator().from_loaders([loader])

print(index.query(query, llm=ChatOpenAI()))