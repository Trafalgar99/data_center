import json


with open("./geodata.json", "r", encoding="utf8") as f:
    data = json.load(f)

print(data["35"])


# service nginx restart
# ps -aux | grep uwsgi
# uwsgi --ini /root/mysite_uwsgi/mysite.ini
