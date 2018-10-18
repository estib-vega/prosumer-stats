"""
getter.py
"""
from requests import get, RequestException
from contextlib import closing

def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 and content_type is not None and content_type.find('html') > -1)

def raw_get(url):
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None
    except RequestException as e:
        print("Couldn't retrieve info from {0}: {1}".format(url, e))
        return None



if __name__ == "__main__":
    test = raw_get("https://www.youtube.com/watch?v=yUtB4Zg_ioc")
    print(test)