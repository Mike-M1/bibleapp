from crewai import Agent, Task, Crew

researcher = Agent(
    role='Senior Research Analyst',
    goal='Uncover cutting-dge developments in AI and data science',
    backstory="A seasoned analyst with years of experience in AI research"
)

task1 = Task(
    description="Conduct a comprehensive analysis of the latest advancements in AI in 2024",
    expected_output="Full analysis report in bullet points",
    agent=researcher
)

crew = Crew(
    agents=[researcher],
    tasks=[task1]
)

def run_crew():
    result = crew.kickoff()
    return result