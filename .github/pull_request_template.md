## Pull Request Document Template

Title Example: "PR Doc - Requirement Title. Task Tracker Task Number"

## Task Meta Data
- Task Tracker Number: #18
- Requirement Description in detail...
- Link to Business Requirement Document if available

## Task Timeline
- Requirement given at: **2023-02-05 11:30 AM**
- Work Started at: **2023-02-06 10:30 AM**
- Expected Deadline given by Assignee:  **2023-02-08 6:00 PM**
- Work Ended at: **2023-02-09 3:30 PM**

### Work Day Gaps
  1. **2023-02-07** - Data Dependency + Unavailability of Team Lead for Mid-Task Review

- Task Assigned to & Worked on by: @Sainath Avadutha @ Srihari Ayapilla
- PR Raised by: @Sainath Avadhuta

## Task Related Information

### Implementation Instructions by PM / Team Lead
- Point 1
- Point 2 etc..

### Design Information
- Include Screen Wireframes
- Include final UI Designs
  - Lark Docs allows you to link Figma Design File directly
- Include Architecture Diagrams
- Include User / Data Flow Representations
- Do the designs match the existing look and feel of the application in all areas?
  - Layout, Buttons, Dialog boxes, User input feedback, borders, font styles, colors, spacings etc.
- Include "After Implementation" screenshots + screen recordings of the completed task.
  - This helps to compare the degree of accuracy with which the design was replicated programmatically.

### Technical Information
- Include / link to technical documentation
- Include Database Design choices explanation
- Include external package dependencies
- Include external data dependencies
- Include technical trade-offs, if any
- Include developer notes / commands
- Include Stack Overflow / other forum posts links you have taken help from

### Implementation Information
- Did you encounter any implementation roadblocks while working on this task? If yes, include them here.
- Did you encounter any data issues while working on this task? How did you resolve them.
- Did you have to do any repetitive action while completing this task which has scope for automation / code generation?
  - Example: Look at AutomatorX package's use case.

### Deployment Instructions
- Include Database Changelog + Scripts + Data Inserts
  - Can the DB Scripts be run before the new Server version is deployed?
  - Or, do the DB Scripts need to be run simultaneously when deploying the new server?
- Include Deployment Scripts
- Include System Changes to be deployed simultaneously, if any
  - Example: Admin Panel and Server must be deployed at the same time, else functionality might break.
- Include extra deployment steps (apart from usual steps taken)
- Include pre-deployment checklist items

## Task Completion Checklist

- [ ] Are all the mentioned business requirements fulfilled by this PR?
- [ ] Are you sure your code changes do NOT have unintended effects on any other parts / features of the application?
- [ ] Can code duplication be reduced in any manner?
- [ ] Does the nomenclature match with existing application standards?
- [ ] File names
- [ ] Method names
- [ ] Variables
- [ ] DB tables
- [ ] API Routes + JSON Keys + Query Parameters
- [ ] Can the performance of the code be improved in any manner?
 - [ ] Lower RAM usage
 - [ ] Faster User Response
 - [ ] Lower Network Bandwidth Usage
 - [ ] Lesser Number of Network Roundtrips (API Calls / DB Calls)
- [ ] Did you use caching wherever possible
  - [ ] In-Memory Caching
  - [ ] Storing into temporary variables instead of re-calculating multiple times
 - [ ] Have you noticed any issues in the existing codebase while working on this task? If yes, did you fix them or raise a new task for that issue?
- [ ] Are there any security issues?
 - [ ] SQL Injection
 - [ ] Unrestricted / Unchecked User Inputs
 - [ ] Unneccessary Information Leakage to Users from Entities / DTOs
 - [ ] Unintended File Format Upload
 - [ ] Are all user permissions checked in every action the users can perform + API Endpoint?
 - [ ] Branch Permissions Check
 - [ ] User Role Permissions Check
 - [ ] Hiding / Disabling at the UI Level
 - [ ] Blocking / Restricting at the API Level
- [ ] Did you include explanation comments in the code you have written?
- [ ] Are you sure that the code you have written is understandable by yourself or other developers in the future without explicit instructions? If not, did you include the explanation in the above technical documentation section?
- [ ] Have you completed testing with all possible values and data conditions?
  - [ ] Min + Max values
  - [ ] Unintended values
  - [ ] Empty / No Data conditions
  - [ ] External systems failure cases
- [ ] Have you cleaned-up unnecessary print() / console.log() statements?
- [ ] Have you extracted important dynamic settings into relevant central settings storage places?
- Example: appsettings.json / content_text settings in DB, enviroment variables etc.
- [ ] UI - Did you include loaders / spinners for user feedback on input / data loading wherever you can?
- [ ] Server - Have you included logging in all places? - for Information, Errors & Warnings
- [ ] Is the code cleanliness maintained?
 - [ ] Reducing number of unnecessary / duplicate variables
 - [ ] Use of Camel Case, Snake Case, Pascal Case in respective places
 - [ ] Include extra white lines between code blocks. (Have no more than 1 extra white line between blocks)
 - [ ] Comments' English sentences start with capitals + use of punctuation like fullstop, ?, commas.
- [ ] JavaScript + TypeScript
   - [ ] Did you use TypeScript in all code additions / changes of the PR?
   - [ ] If not, why? Include the reason in the technical documentation area.
 - [ ] Is "any" / "dynamic" type used in the codebase?
   - [ ] If yes, are they all replaced with correct types?
   - [ ] If there is no way to remove them, did you include these areas in the above technical documentation?
   - [ ] Vue
    -  [ ] Are all your stylings in SCSS?
    - [ ] Are all your SCSS class names according to BEM convention? BEM Class Names Guide
    - [ ] Can you reduce code duplication in the SCSS you wrote?
 - [ ] Dart / Flutter
 - [ ] Are any widget re-builds happening unnecessarily?
 - [ ] Did you split code into widgets wherever needed?
  -  [ ] For re-usability of code.
   - [ ] For Flutter to avoid re-rendering of unchanged items in the widget tree.
 - [ ] Is the App's New Version compatible with the Older version's Local Storage? (Hive + SQL)
 - [ ] Did you complete upgrade testing? (Previous master to current changes)
 - [ ] Did you run build runner and check/validate any changes to the generated files that are not previously present?
 - [ ] If UI changes are present, did you check the changes in both light and dark modes and validate the changes according to the design?
 - [ ] Did you check any outdated packages and update them to latest version wherever possible? If updated did you check the working of all the features this update affect?
 - [ ] Did you test any new UI changes added in small screen devices?
 - [ ] SQL Scripts -
  - [ ] Are you running certain scripts inside a transaction to rollback if necessary due to an error before the reponse it sent?
  - [ ] Are all your SQL queries using column Indices for optimal performance?
  - [ ] Have you set all possible data constraints at the DB level? (Unique, Primary Key, Foreign Keys etc.)
  - [ ] Did you include all scripts to mimic Production DB with Dev DB?
 - [ ] APIs
  - [ ] Are all JSON properties in snake_case format?
  - [ ] Do all the existing Mobile Apps APIs work with previous versions of the mobile apps? (Backward compatibility)
   - [ ] If not, are you checking for app_version and varying request / response logic accordingly?
 - [ ] Did you add Validations for User Inputs in the DTOs + Controllers?
   - [ ] Required, Min Length, Max, Range, RegExp
   - [ ] Checking for Date Range Validations? (Ex: Schedule date can only be after current date time etc.)
- [ ] Are all assets like Images, Videos, Icons, Fonts etc. not redundant and are in the relevant resolution / sizes to keep the release bundle size minimal?
- [ ] Do all your Git commits have clear Commit Titles and Descriptions?
- [ ] Is your PR Title clear for new and existing users to understand what it's about?

## Signoffs

### Code review by:
  - Person 1 @Srihari Ayapilla
  - @Sainath Avadhuta

### Technical & Data Testing done by:
  - Person 1
  - Person 2 etc...
  - Note: Testing must be done by the assignee as well as at least one other team member excluding the TL / Manager.

### UI Design Validated by:
  - Designer 1

### Requirement Fulfillment Validated by:
  - Person 1
  - Person 2 etc...

### Overall Testing + QA + QC done by:
  - Person 1
  - Person 2 etc...

- Note: Each Person's input here in the Signoff section must be accompanied by a comment on the document at the same time to record the date + time of the input.
