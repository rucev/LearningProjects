import numpy
from functools import reduce
import copy


# Obtiene una lista de listas de las coordenadas (número fila y columna) de cada posición dentro de la matriz
def get_positions(matrix):
    position_list = []
    for column in range(len(matrix[0])):
        for row in range(len(matrix)):
            position_list.append([row, column])
    return position_list

# Extrae los números relevantes (vecinos y el propio número) de UN elemento considerando su fila y columna para navegar en la matriz
def get_relevant_numbers(matrix, number_position):
    row =  number_position[0]
    column = number_position[1]
    top_position = [row, column-1]
    right_position = [row+1, column]
    bottom_position = [row, column+1]
    left_position = [row-1, column]
    relevant_positions = [number_position, top_position, right_position, bottom_position, left_position]
    valid_relevant_positions = filter(lambda position: is_position_valid(position[0], position[1], len(matrix), len(matrix[0])), relevant_positions)
    return list(map(lambda position: matrix[position[0]][position[1]], valid_relevant_positions))

# Función para comprobar si una posición (marcada por número de fila y columna) esta dentro de la matriz
def is_position_valid(row, column, max_rows, max_columns):
    return row >= 0 and column >= 0 and row < max_rows and column < max_columns

# Calcula la media de una lista de numeros
def calculate_media(numbers):
    return reduce(lambda number, acc: number+acc, numbers, 0)/len(numbers)

# Crea una matriz en la que cada valor se sustituye por la media del mismo y sus vecinos
def _process_matrix(matrix):
    matrix_positions = get_positions(matrix)
    new_matrix = copy.deepcopy(matrix)
    for position in matrix_positions:
        media = calculate_media(get_relevant_numbers(matrix, position))
        new_matrix[position[0]][position[1]] = media
    return new_matrix

# Llama a proces matrix excepto en los casos en que no se esta introduciendo una matriz númerica
def process_matrix(matrix):
    if matrix == [] or not any(matrix):
        return []
    elif is_numerical_matrix(matrix) == True: 
        return _process_matrix(matrix)
    else:
        raise ValueError("Only works with a numerical matrix")

# Comprueba que se este pasando una matriz con el formato adecuado y totalmente númerica
def is_numerical_matrix(matrix):
    if is_format_valid(matrix) == False:
        return False
    matrix_positions = get_positions(matrix)
    for position in matrix_positions:
        only_numbers = is_a_number(matrix, position)
        if only_numbers == False:
            break
    return  only_numbers

# Comprueba si el formato es válido (comprueba primero si es una lista de listas y que estas miden igual todas)
def is_format_valid(matrix):
    return all(isinstance(rows, list) for rows in matrix) and False not in [len(row) == len(matrix[0]) for row in matrix]

# Comprueba si el elemento de una posición concreta de la matriz es un número
def is_a_number(matrix, position):
    value = matrix[position[0]][position[1]] 
    return type(value) == int or type(value) == float


# Función para imprimir una matriz con numeros redondeados
def print_matrix(matrix):
    print(numpy.round(matrix, decimals=2))




