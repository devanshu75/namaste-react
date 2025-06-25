# Exploring the World

## What is a Microservice?

- Microservice is a small, loosely coupled service that is designed to perform a specific business function and each microservices can be developed deployed, and scaled independently.
- This architecture allow us to break large monolith application and
  decompose it into small manageable components/services. Also, it is
  considered as the building block of modern application.

## How do Microservices work?

Microservices break complex applications into smaller, independent services that work together, enhancing scalability, and maintenance.

1. Application are divided into self-contained services, each focused on a specific function, simplifying development and maintenance.

2. Each microservices handles a particular business feature, like user
   authentication or product management, allowing for specialized development.
3. Services interact via APIs, facilitating standardized information
   exchange and integration.

4. Different technologies can be used for each service, enabling teams
   to select the best tools for their needs.

5. Microservices can be updated independently, reducing risks during
   changes and enhancing system resilience.

## What is Monolithic architecture?

Monolithic architecture is a software design methodology that combines
all of an application's components into a single, inseparable unit.Under
this architecture, the user interface, business logic, and data access layers are all created, put into use, and maintained as one, unified unit.


## What is the difference between Monolith and Microservice?

| aspect          | Monolithic Architecture                             | Microservice Architecture                                                        |
|-----------------|-----------------------------------------------------|----------------------------------------------------------------------------------|
| Architecture    | Single-tier architecture                            | Multi-tier architecture                                                          |
| Size            | Large, all components tightly coupled               | Small, loosely coupled components                                                |
| Deployment      | Deployed as a single unit                           | Individual services can be deployed independently                                |
| Scalability     | Horizontal scaling can be challenging               | Easier to scale horizontally                                                     |
| Development     | Development is simpler initially                    | Complex due to managing multiple services                                        |
| Technology      | Limited technology choices                          | Freedom to choose the best technology for each service                           |
| Fault Tolerance | Entire application may fail if a part fails         | Individual services can fail without affecting others                            |
| Maintenance     | Easier to maintain due to its simplicity            | Requires more effort to manage multiple services                                 |
| Flexibility     | Less flexible as all components are tightly coupled | More flexible as components can be developed, deployed, and scaled independently |
| Communication   | Communication between components is faster          | Communication may be slower due to network calls                                 |