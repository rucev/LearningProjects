from project.main import *

def test_is_position_valid_happy_path():
    #given multiple row, columns and max rows and columns (int)
    row = 1
    max_rows = 2
    column = 2
    max_colums = 3

    #when we call is position valid
    result = is_position_valid(row, column, max_rows, max_colums)

    #then we expect correct response
    assert result is True


def test_is_position_valid_false_when_row_and_column_exeed_max():
    #given multiple incorrect positions (int)
    row = 6
    max_rows = 2
    column = 5
    max_colums = 3

    #when we call is position valid
    result = is_position_valid(row, column, max_rows, max_colums)

    #then we expect correct response
    assert result is False


def test_is_position_valid_false_when_negative_numbers():
    #given negative positions (int)
    row = -1
    max_rows = -1
    column = 5
    max_colums = 3

    #when we call is position valid
    result = is_position_valid(row, column, max_rows, max_colums)

    #then we expect correct response
    assert result is False