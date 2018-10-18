"""
parser.py
"""

from bs4 import BeautifulSoup
from getter import raw_get

def parse_html(raw_html):
    html = BeautifulSoup(raw_html, "html.parser")
    for div in html.find_all("div"):
        try:
            if 'id' in div.attrs and div.attrs['id'] == "watch7-views-info":
                return div
        except UnicodeEncodeError:
            print("Unable to print")
            
    return None

def get_stats(raw_html):
    info = parse_html(raw_html)
    
    # watch-view-count
    inner_string = info.contents[0].string

    sparkbar = info.contents[2]
    # video-extras-sparkbar-likes
    likes_style = sparkbar.contents[1].attrs['style']

    # video-extras-sparkbar-dislikes
    dislikes_style = sparkbar.contents[3].attrs['style']

    views = inner_string.split()[0]
    likes = likes_style.split()[1][:-1]
    dislikes = dislikes_style.split()[1][:-1]

    return float(views), float(likes), float(dislikes)


def get_from_url(url):
    raw_html = raw_get(url)
    return get_stats(raw_html)  


if __name__ == "__main__":
    raw_html = raw_get("https://www.youtube.com/watch?v=yUtB4Zg_ioc")
    views, likes, dislikes = get_stats(raw_html)

    print(views, likes, dislikes)
    