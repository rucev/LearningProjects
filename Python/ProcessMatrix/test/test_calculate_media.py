from project.main import *

def test_calculate_media_happy_path():
    #given a list of numbers
    num = ([1, 2, 3])

    #when we call calculate media
    result = calculate_media(num)

    #then we expect correct response
    assert result == 2

