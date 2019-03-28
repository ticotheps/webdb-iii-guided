## A good data model

- capture all the data the system needs
- capture ONLY the data the system needs
- reflects reality
- is flexible, can evolve with the systems
- guarantees data integrity
- is driven by the way data will be used

## Components

- (1) entities 
    - the nouns === resource -> tables
    - doesn't have to be a physical thing 
        - i.e. - a transaction, a sale
- (2) attributes/properties (of entities)
    - maps out to be the 'columns' of the table
- (3) relationships between entities
    - these are the sub-routes -> foreign keys

## Workflow

- Step 1: Identify the entities.
    - Use whiteboard or paper/pencil
        - Draw squares to represent entities
    - Examples of entities for this project:
        - (a) tracks
            - id
            - name
            - start date
            - end date
        - (b) cohorts
        - (c) students
- Step 2: Identify the attributes. 
- Step 3: Identify the relationships.

## Relationships

- One to One (more like 'one to zero' sometimes)
    - This relationship is not normally found a lot.
    - Example:
        - A person and their spouse.
        - Not everyone is married.
        - No need to save information for the single people because they
          don't have a spouse.
- One to Many
    - This relationship is the most commonly found.
    - This type of relationship is your 'friend'.
    - There is a foreign key.
        - The foreign key always references the primary key in the          primary table.
        - The foreign key goes on the 'many' side.
- Many to Many  
    - This relationship doesn't REALLY exist.
    - This relationship needs a THIRD table.
        - This third table has TWO foreign keys that reference primary      keys in the other tables.

