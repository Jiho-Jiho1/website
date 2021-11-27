using Jiho;

namespace GettingInput
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("How old are you?");
      string input = Console.ReadLine();
      Console.WriteLine($"You are {input} years old!");

      Console.WriteLine("What is your name?");
      string input = Console.ReadLine();
      Console.WriteLine($"Nice to meet you, {input} !");
    }
  }
}