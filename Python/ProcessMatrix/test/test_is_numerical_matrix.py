from project.main import *

def test_is_numerical_matrix_happy_path():
    #given a correct matrix
    matrix = [[1, 2, 3], [4, 5, 6]]

    #when we call is position valid
    result = is_numerical_matrix(matrix)

    #then we expect correct response
    assert result is True

def test_is_numerical_matrix_false_when_different_len():
    #given a list o lists with different len
    matrix = [[1, 2, 3], [4, 5, 6, 7]]

    #when we call is position valid
    result = is_numerical_matrix(matrix)

    #then we expect the response
    assert result is False

def test_is_numerical_matrix_false_when_has_more_than_numbers():
    #given a matrix that has other things apart of numbers
    matrix = [[1, 2, 3], ["A", 5, 6],[7, 8, 9]]

    #when we call is position valid
    result = is_numerical_matrix(matrix)

    #then we expect the response
    assert result is False
