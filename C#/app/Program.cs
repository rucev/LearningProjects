string GetUserInput(string option)
{
    if (option == "value1")
    {
        Console.WriteLine("Write the first value: ");
    }
    else if (option == "value2")
    {
        Console.WriteLine("Write the second value: ");
    }
    else
    {
        Console.WriteLine("Select operation:");
        Console.WriteLine("[A]dd");
        Console.WriteLine("[S]ubstract");
        Console.WriteLine("[M]ultiply");
    }

    var userInput = Console.ReadLine();

    if (userInput != null && (option == "value1" || option == "value2"))
    {
        return userInput;
    }
    if (userInput != null && option == "menu")
    {
        if (userInput.Equals("a", StringComparison.CurrentCultureIgnoreCase))
        {
            return "+";
        }
        if (userInput.Equals("s", StringComparison.CurrentCultureIgnoreCase))
        {
            return "-";
        }
        if (userInput.Equals("m", StringComparison.CurrentCultureIgnoreCase))
        {
            return "x";
        }

    }

    return "Invalid input!";

}

void Start()
{
    Console.WriteLine("Welcome to this calculator!");
    string inputValue1 = GetUserInput("value1");
    string inputValue2 = GetUserInput("value2");

    string operation = GetUserInput("menu");

    Console.WriteLine(inputValue1 + operation + inputValue2 + "=");

    if (operation == "+")
    {
        Console.WriteLine(int.Parse(inputValue1) + int.Parse(inputValue2));
    }
    if (operation == "-")
    {
        Console.WriteLine(int.Parse(inputValue1) - int.Parse(inputValue2));
    }
    if (operation == "x")
    {
        Console.WriteLine(int.Parse(inputValue1) * int.Parse(inputValue2));
    }
}

Start();
Console.ReadKey();