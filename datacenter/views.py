from django.http import JsonResponse
from django.shortcuts import render
from django.db import connection


# Create your views here.


def index(request):
    return render(request, 'index.html', {})


def z1(request):
    return render(request, 'z1.html', {})


def get_data(request):
    import json

    params = list(request.GET.keys())
    geoIndex = params[0]
    geoIndex = int(geoIndex)
    # ----测试：输出获取的省份id----
    print(geoIndex)
    # --------------------------
    mycursor = connection.cursor()
    mycursor.execute("select * from data")
    rows = mycursor.fetchall()
    rows = dict(zip(range(36), (k[1] for k in rows)))
    dataX = json.loads(rows[geoIndex])
    return JsonResponse(dataX)
