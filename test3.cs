using System;

namespace GettingInput
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("What is your name?");
      string input = Console.ReadLine();
      Console.WriteLine($"Nice to meet you, {input} !");

      Console.WriteLine("How old are you?");
      string input1 = Console.ReadLine();
      Console.WriteLine($"{input} ,you are {input1} years old!");

    Console.WriteLine("Ok, bye!");
      string input2 = Console.ReadLine();
      Console.WriteLine($"{input} ,have a great day! Bye!");
    }
  }
}

Console.WriteLine("Bye!")

return 0;