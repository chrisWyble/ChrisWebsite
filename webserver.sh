#!/bin/bash

google-chrome "http://0.0.0.0:8000"
#google-chrome "http://localhost:8000"

# python 3.x
python -m http.server
# python -m http.server 7800 
# optional port

# python 2.x
# python -m SimpleHTTPServer 7800

