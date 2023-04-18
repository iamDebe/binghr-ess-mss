export const authUser = () => {
    return {
        job_title: "UX Lead",
        name:"Auth User",
        department: "Branding",
        showProfile: false,
        superior:{
          job_title: "Branding Chief",
          name:"User superior",
          department: "Branding",
          showProfile: false,
          superior:{
            job_title: "Big Chief",
            name:"Superiors Superior",
            department: "Branding",
            showProfile: false,
            superior:null
          },
          subordinates:[]
        },
        subordinates: [
            {
              job_title: "UX Lead",
              name:"User 1 sub 1",
              department: "Branding",
              showProfile: false,
              subordinates:[
                {
                  job_title: "Branding Chief",
                  name:"Sub 1 sub1",
                  department: "Branding",
                  showProfile: false,
                  superior:null,
                  subordinates:[]
                },
                {
                  job_title: "Branding Chief",
                  name:"Sub 1 sub 2",
                  department: "Branding",
                  showProfile: false,
                  superior:null,
                  subordinates: []
                }
              ],
              superior:null
            },
            {
              job_title: "UX Lead",
              name:"User1 sub 2",
              department: "Branding",
              showProfile: false,
              subordinates:[],
              superior:null
            },
            {
              job_title: "UX Lead",
              name:"USer1 sub 3",
              department: "Branding",
              showProfile: false,
              subordinates:[],
              superior:null
            },
            {
              job_title: "UX Lead",
              name:"User1 sub 4",
              department: "Branding",
              showProfile: false,
              subordinates:[],
              superior:null
            },
           
        ]
    }
}