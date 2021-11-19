import { config } from '../data/config.js'

export const algorithms = msg => {
  	if (msg.content.includes(config.prefix + 'algorithms')) {
    	if (msg.author.bot) {
			return
	  	}
		const args = msg.content.substring(config.prefix.length).split(' ')
		if (!args[1]) {
			msg.channel.send('```An algorithm is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer. \n \n Please choose from the following with a #algorithms [command]: \n \n 1: Linear Search \n 2: Binary Search\n 3: Selection-sort\n 4: Quick-sort\n 5: breadth-first\n 6: dijkstra\'s```')
		}
		else if (args[1] === 'linear') {
			(msg.channel.send('```Linear Search: \n \nIn this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.\n\nThe time complexity of linear search is O(n).```'))
			}
		else if (args[1] === 'binary') {
			(msg.channel.send('```Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.\n\nBinary search looks for a particular item by comparing the middle most item of the collection. If a match occurs, then the index of item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero.```'))
		}
		else if (args[1] === 'selection-sort') {
			(msg.channel.send('```Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.\n\nThe smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.\n\nThis algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.```'))
		}
		else if (args[1] === 'quick-sort') {
			(msg.channel.send('```Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.\n\nQuicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.```'))
		}
		else if (args[1] === 'breadth-first') {
			(msg.channel.send('```Breadth First Search (BFS) algorithm traverses a graph in a breadthward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration.\n\nRule 1 − Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue.\n\nRule 2 − If no adjacent vertex is found, remove the first vertex from the queue.\n\nRule 3 − Repeat Rule 1 and Rule 2 until the queue is empty.```'))
		}
		else if (args[1] === 'dijkstra\'s') {
			(msg.channel.send('```With Dijkstra\'s Algorithm, you can find the shortest path between nodes in a graph. Particularly, you can find the shortest path from a node (called the "source node") to all other nodes in the graph, producing a shortest-path tree.\n\nThis algorithm is used in GPS devices to find the shortest path between the current location and the destination. It has broad applications in industry, specially in domains that require modeling networks.```'))
		}
	}
}