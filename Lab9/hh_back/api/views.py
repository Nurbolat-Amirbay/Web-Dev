from django.http import JsonResponse, Http404
from django.core import serializers
from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    data = serializers.serialize('json', companies)
    return JsonResponse(data, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
        data = serializers.serialize('json', [company])
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        raise Http404

def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
        vacancies = company.vacancies.all()
        data = serializers.serialize('json', vacancies)
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        raise Http404

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = serializers.serialize('json', vacancies)
    return JsonResponse(data, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
        data = serializers.serialize('json', [vacancy])
        return JsonResponse(data, safe=False)
    except Vacancy.DoesNotExist:
        raise Http404

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = serializers.serialize('json', vacancies)
    return JsonResponse(data, safe=False)
