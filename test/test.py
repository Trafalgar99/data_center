from cmath import log
from http import client
import json
from socket import socket
from statistics import harmonic_mean

import django


with open("./geodata.json", "r", encoding="utf8") as f:
    data = json.load(f)

print(data["35"])


# service nginx restart
# ps -aux | grep uwsgi
# uwsgi --ini /root/mysite_uwsgi/mysite.ini

def application(env, start_response):
    start_response("200 ok", [("Content-Type", "text/html")])
    return [b"Hello World"]
