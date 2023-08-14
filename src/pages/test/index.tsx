import React from 'react'

export default function index() {
    
        const users=[

          "Alex",
          "Jon",
          "Eminem",
          
        ]
        return  (
        
        <div>
            <ul>
            {users.map((user,i) =>(
              <li key={i}>{user}</li>
                
              ))}
              </ul>
            
        </div>
        )
      }

