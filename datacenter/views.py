from django.http import JsonResponse
from django.shortcuts import render
from django.db import connection
import mysqlx

# Create your views here.


def index(request):
    return render(request, 'index.html', {})


def z1(request):
    return render(request, 'z1.html', {})


def z2(request):
    return render(request, 'z2.html', {})


def z3(request):
    return render(request, 'z3.html', {})


def y1(request):
    return render(request, 'y1.html', {})


def y2(request):
    return render(request, 'y2.html', {})


def y3(request):
    return render(request, 'y3.html', {})


def get_data(request, *args, **kwargs):
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
