import "../App.css";

import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <Card className="mx-4 p-4 md:mx-16 md:p-8">
      <h1 className="text-[24px]! md:text-[32px]">About RPS vs The World</h1>
      <p className="text-[12px] md:text-[16px]">
        On the surface, this is a simple project where you can play Rock Paper Scissors against an algorithm of my own design.
        While this is definitely true, the project’s origins and purpose are a little more complicated than that. I began my journey
        as a programmer in the spring of 2022, and one of my first projects was building the game of Rock Paper Scissors using pure
        JavaScript, HTML, and CSS. I remember trying to find other examples of algorithmic and robotic RPS machines and came across
        this video:
        <a href={"https://www.youtube.com/watch?v=3nxjjztQKtY"} target="_blank" rel="noopener noreferrer"> here.</a>
        <br/>
        <br/>
        Now, of course, in and of itself this is a wildly impressive feat, and I would be lucky to work on a project as cool as this.
        But we can all agree that this is cheating, right? It is a robot that does not “think” about how to beat you. It does not
        predict or strategize; it’s simply looking at your move and reacting at such a high rate of speed that it never loses,
        because it is always playing after you. As a young programmer eager to prove himself, I took this personally.
        <br/>
        <br/>
        At the time of writing this, I am four years into my programming journey. After going through a programming boot camp, job
        hunting for nearly all four of those years, and going back to school for a degree, I have realized that I need to either grit
        my teeth and take on more debt to earn a piece of paper from a university that tells hiring managers I know how to code, or
        build a portfolio that clearly shows my skills and abilities. This project came back into the mix because of that decision.
        I am using a Vite frontend with a .NET backend and a Supabase database. I make various fetch requests to my .NET API,
        create accounts based on users logging in with Google, built a JWT system to ensure security, and use Tailwind, shadcn,
        Framer Motion, and various other libraries to display the game itself, along with data about you and the rest of humanity
        as you battle my algorithm.
        <br/>
        <br/>
        I am calling this version 1—a rough draft. I still want to improve the algorithm, as it is relatively simple, and I have many
        ideas on how to expand it further. However, I firmly believe that the best approach to projects—especially ones you work on
        completely alone—is to build the project first and then perfect it over time.
        <br/>
        <br/>
        I hope you enjoy this peek into my crazy, RPS-addicted mind.
        <br/>
        <br/>
        – Robert Lewis
      </p>
    </Card>
  );
}
