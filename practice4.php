<?php
  $num = $_POST["size"];
  echo "<a href='https://people.eecs.ku.edu/~h334w620/index.html'>BACK TO INDEX</a>";
  echo "<table border='1'>";
  echo "<tr><th>&nbsp;</th>";

  // create header row with column indexes
  for ($i=1; $i<=$num; $i++) {
    echo "<th>$i</th>";
  }

  echo "</tr>";

  // create table rows with row indexes and multiplication values
  for ($i=1; $i<=$num; $i++) {
    echo "<tr><th>$i</th>";
    for ($j=1; $j<=$num; $j++) {
      echo "<td>" . $i*$j . "</td>";
    }
    echo "</tr>";
  }

  echo "</table>";
?>
