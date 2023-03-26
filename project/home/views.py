from django.shortcuts import render

# Create your views here.


def index(request):
    iframe_codes = ['<iframe src="https://embed.vntana.com?productUuid=219198c2-2be5-4248-905e-eab29c5c3e35&clientSlug=vntana-marketing&organizationSlug=vntana-tech-test-02"></iframe>',
                    '<iframe src="https://app.vectary.com/p/6JUjnpxVLsmPmDGW0tpVSQ"></iframe>',
                    '<iframe src="https://app.vectary.com/p/6JUjnpxVLsmPmDGW0tpVSQ"></iframe>']
    context = {'iframe_codes': iframe_codes}
    return render(request, 'index.html', context)


def about(request):
    return render(request, 'about.html')


def services(request):
    return render(request, 'services.html')


def contact(request):
    return render(request, 'contact.html')
