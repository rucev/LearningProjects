import pygame as p
import random
p.init()

orange = (255,128, 0)
green = (0, 204, 0)
white = (255, 255, 255)
black = (0, 0, 0)


display_width = (800)
display_height = (600)

display = p.display.set_mode((display_width, display_height))
p.display.set_caption("Snake")

clock = p.time.Clock()

snake_block = 10
snake_speed = 20

font_style = p.font.SysFont("Arial", 40)
font_score = p.font.SysFont("Arial", 20)

def snake(snake_block, snake_list):
    for x in snake_list:
        p.draw.rect(display, green, [x[0], x[1], snake_block, snake_block])

def score(points):
    value = font_score.render("Score: " + str(points), True, orange)
    display.blit(value, [0, 0])

def message(msg,color, width, height):
    msge = font_style.render(msg, True, color)
    display.blit(msge, [width, height])

def game_loop():
    game_over = False
    game_close = False

    x1 = display_width / 2
    y1 = display_height / 2
    x1_change = 0       
    y1_change = 0

    snake_list = []
    length_of_snake = 1

    food_x = round(random.randrange(0, display_width - snake_block) / 10.0) * 10.0
    food_y = round(random.randrange(0, display_height - snake_block) / 10.0) * 10.0

    while not game_over:

        while game_close == True:
            display.fill(black)
            message("GAME OVER!", orange, display_width/6, display_height/3)
            message("Q - salir // A - jugar otra vez", orange, display_width/6, display_height/2)
            score(length_of_snake - 1)
            p.display.update()
            
            for event in p.event.get():
                if event.type == p.KEYDOWN:
                    if event.key == p.K_q:
                        game_over = True
                        game_close = False
                    if event.key == p.K_a:
                        game_loop()

        for event in p.event.get():
            if event.type == p.QUIT:
                game_over = True
            if event.type == p.KEYDOWN:
                if event.key == p.K_LEFT:
                    x1_change = -snake_block
                    y1_change = 0
                elif event.key == p.K_RIGHT:
                    x1_change = snake_block
                    y1_change = 0
                elif event.key == p.K_UP:
                    y1_change = -snake_block
                    x1_change = 0
                elif event.key == p.K_DOWN:
                    y1_change = snake_block
                    x1_change = 0

        if x1 >= display_width or x1 < 0 or y1 >= display_height or y1 < 0:
            game_close = True
        
        x1 += x1_change
        y1 += y1_change
        display.fill(black)
        p.draw.rect(display, orange, [food_x, food_y, snake_block, snake_block])

        snake_Head = []
        snake_Head.append(x1)
        snake_Head.append(y1)
        snake_list.append(snake_Head)
     
        if len(snake_list) > length_of_snake:
            del snake_list[0]
     
        for x in snake_list[:-1]:
            if x == snake_Head:
                game_close = True

        snake (snake_block, snake_list)
        score(length_of_snake - 1)
        p.display.update()

        if x1 == food_x and y1 == food_y:
            food_x = round(random.randrange(0, display_width - snake_block) / 10.0) * 10.0
            food_y = round(random.randrange(0, display_height - snake_block) / 10.0) * 10.0
            length_of_snake += 1
 
        clock.tick(snake_speed)
        

    p.quit()
    quit()

game_loop()