from flask import Flask, request, jsonify
import os
import constants
import warnings

from langchain_community.document_loaders import TextLoader
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import UnstructuredFileLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain_core._api.deprecation import LangChainDeprecationWarning
from langchain_community.llms import openai
from langchain_community.chat_models import ChatOpenAI


from langchain.prompts.chat import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)

from langchain_core.messages import HumanMessage, SystemMessage

warnings.filterwarnings("ignore", category=LangChainDeprecationWarning)

os.environ["OPENAI_API_KEY"] = constants.APIKEY

app = Flask(__name__)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@app.route('/generate-text', methods=['POST'])

def generate_text():
    data = request.json
    query = data['text']

    loader = TextLoader("data/reference.txt")
    loader2 = DirectoryLoader('data/')

    index = VectorstoreIndexCreator().from_loaders([loader2])

    result = index.query(query, llm=ChatOpenAI(temperature=0, model="gpt-3.5-turbo",))

    return jsonify({'generatedText': result})


@app.route('/')
def index():
    return "Flask server is running"


if __name__ == '__main__':
    app.run(port=9000)
