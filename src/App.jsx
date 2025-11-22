import Card from './components/card'

const App = () => {

  const jobs = [
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Mumbai, India"
    },

    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      companyName: "Google",
      datePosted: "30 days ago",
      post: "Graphic Designer",
      tag1: "Part Time",
      tag2: "Flexible Schedule",
      pay: "$150-220k",
      location: "Kochi, India"
    },
    {
      brandLogo: "https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png",
      companyName: "Dribbble",
      datePosted: "10 days ago",
      post: "Senior Motion Designer",
      tag1: "Contract",
      tag2: "Remote",
      pay: "$85/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png",
      companyName: "Figma",
      datePosted: "5 days ago",
      post: "UX Designer",
      tag1: "Full Time",
      tag2: "In Office",
      pay: "$200-250kr",
      location: "Banglore,India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
      companyName: "Airbnb",
      datePosted: "5 days ago",
      post: "Junior UI/UX Designer",
      tag1: "Contract",
      tag2: "Remote",
      pay: "$100/hr",
      location: "Delhi,India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "Grafhic Designer",
      tag1: "Full Time",
      tag2: "Flexible Schedule",
      pay: "$85-120k",
      location: "Kerela,India"
    }
    
  ];


  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App
