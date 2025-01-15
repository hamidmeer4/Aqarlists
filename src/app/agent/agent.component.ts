import { Component } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {
  page = 1;
  pageSize = 20;
  searchName = '';
  selectedCity = '';

  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  
  public names = [
    "Alex Carter", "Jordan Lee", "Taylor Morgan", "Sam Reynolds", "Charlie Brooks",
    "Casey Bennett", "Blake Harrison", "Riley Adams", "Morgan Palmer", "Jordan Mitchell",
    "Avery Thompson", "Parker Scott", "Quinn Taylor", "Skyler Grant", "Rowan Woods",
    "Dakota Hayes",
  ];
  
  public roles = [
    'Agent', 
    'Manager', 
    'Supervisor', 
    'Director', 
    'Real Estate Agent', 
    'Property Consultant', 
    'Real Estate Broker', 
    'Property Specialist', 
    'Sales Consultant', 
    'Property Advisor'
  ];
    public images = [
    'assets/images/agent1.png',
    'assets/images/agent2.png',
    'assets/images/agent3.png',
    'assets/images/agent4.png',
  ];
  
 public agents = Array.from({ length: 300 }, (_, i) => {
    const randomName = this.names[i % this.names.length];
    const randomRole = this.roles[i % this.roles.length];
    const randomImage = this.images[i % this.images.length];
  
    return {
      name: randomName,
      role: randomRole,
      image: randomImage,
    };
  });
  
  
  filteredAgents() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.agents
      .filter(agent => agent.name.toLowerCase().includes(this.searchName.toLowerCase()))
      .slice(start, end);
  }

  previousPage() {
    if (this.page > 1) this.page--;
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  get totalPages() {
    return Math.ceil(this.agents.length / this.pageSize);
  }
}
