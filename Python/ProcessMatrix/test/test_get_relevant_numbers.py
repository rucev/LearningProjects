from project.main import *

def test_get_relevant_numbers_happy_path():
    #given a matrix and coordenates to row/column
    matrix = [[1, 2],[3, 4]]
    row_column = [0, 0]

    #when we call get relevant numbers
    result = get_relevant_numbers(matrix, row_column)

    #then we expect correct response
    assert result == [1, 3, 2]


def test_get_relevant_numbers_negative_positions():
    #given a matrix and negative coordenates to row/column
    matrix = [[1, 2],[3, 4]]
    row_column = [-1, -1]

    #when we call get relevant numbers
    result = get_relevant_numbers(matrix, row_column)

    #then we expect the response
    assert result == []