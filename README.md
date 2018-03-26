# chbb-chatbot

1. ./bb.sh -m generate
2. ./bb.sh -m create (migrate db, seed) 
    - if you encounter error while seeding; you need to manually change the db scheme to UTF8
3. ./bb.sh -m up (restart without migration)