"""
main.py

"""

from parser import get_from_url

def main():
    views, likes, dislikes = get_from_url("https://www.youtube.com/watch?v=yUtB4Zg_ioc")

    print(views, likes, dislikes)

if __name__ == "__main__":
    main()