export function dijkstra(grid, startNode, finishNode) {
  // Get the grid, the starting node, and the ending node
  const visitedNodesInOrder = []; // The path traversed in order to reach the finish
  // Set the distance from start to every other node as infinity
  startNode.distance = 0; // Except for start node which is 0
  const unvisitedNodes = getAllNodes(grid); // Get all Unvisited Nodes
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes); // Take two nodes and sort them by their distance
    const closestNode = unvisitedNodes.shift(); // pop off the element from array
    if (closestNode.isWall) continue; // If there's a wall, skip it
    if (closestNode.distance === Infinity) return visitedNodesInOrder; // If surrounded by a wall, stop
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode); // Push the nodes in order
    if (closestNode === finishNode) return visitedNodesInOrder; // If the finish node, then return the path
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  // Update Neighbour Nodes
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, grid) {
  // get the adjacent nodes that are unvisited
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]); // Top node
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]); // Bottom node
  if (col > 0) neighbors.push(grid[row][col - 1]); // Left node
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]); // Right node
  return neighbors.filter((neighbor) => !neighbor.isVisited); // return just the unvisited neighbours
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

// Backtracks from the finishNode to find the shortest path.
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
