from project.main import *

def test_process_matrix_empty():
    #given a matrix
    matrix = [[]]

    #when we call process matrix
    result = process_matrix(matrix)

    #then we expect correct response
    assert result == []


def test_process_matrix_simple_row():
    #given a matrix
    matrix = [[1, 2]]

    #when we call process matrix
    result = process_matrix(matrix)

    #then we expect correct response
    assert result == [[1.5, 1.5]]


def test_process_matrix_simple_column():
    #given a matrix
    matrix = [[1],[2],[3],[1]]

    #when we call process matrix
    result = process_matrix(matrix)

    #then we expect correct response
    assert result == [[1.5],[2],[2],[2]]



def test_process_matrix_complex():
    #given a matrix
    matrix = [[2, 1, 3, 4], [6, 5, 7, 8], [9, 0, 10, 42]]

    #when we call process matrix
    result = process_matrix(matrix)

    #then we expect correct response
    assert result == [[3.0, 2.75, 3.75, 5.0], [5.5, 3.8, 6.6, 15.25], [5.0, 6.0, 14.75, 20.0]]


