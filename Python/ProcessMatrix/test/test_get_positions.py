from project.main import *

def test_get_positions_empty():
    #given a matrix
    matrix = [[]]

    #when we call get positions
    result = get_positions(matrix)

    #then we expect correct response
    assert result == []


def test_get_positions_simple():
    #given a matrix
    matrix = [[1, 2]]

    #when we call get positions
    result = get_positions(matrix)

    #then we expect correct response
    assert result == [[0, 0],[0, 1]]
    

def test_get_positions_complex():
    #given a matrix
    matrix = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 0]]

    #when we call get positions
    result = get_positions(matrix)

    #then we expect correct response
    assert result == [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]]