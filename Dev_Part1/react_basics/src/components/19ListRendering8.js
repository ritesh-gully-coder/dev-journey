//List without key attribute:->>>
//case 1:->
{/* <ul>                                         
  <li>mr</li>
  <li>ritesh</li>
</ul> */}

{/* <ul>                                         
  <li>mr</li>
  <li>ritesh</li>
  <li>kumar</li>
</ul> */}

//case2:->
{/* <ul>                                         
  <li>ritesh</li>
  <li>mr</li>
</ul> */}

{/* <ul>                                         
  <li>kumar</li>
  <li>ritesh</li>
  <li>mr</li>
</ul> */}

//List with key attribute:->>>
//case 1:->
{/* <ul>                                         
  <li key="1">mr</li>
  <li key="2">ritesh</li>
</ul> */}

{/* <ul>                                         
  <li key="1">mr</li>
  <li key="2">ritesh</li>
  <li key="3">kumar</li>
</ul> */}



//A "key" is a special string attribute you need to include when creating lists of elements.
//keys give the elements stable identity.
//keys help React identify which items have changed,or are added,or are removed.
//Help in efficient update of the user interface.

