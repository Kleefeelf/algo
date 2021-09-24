class Tree:

    def __init__(self):
        self.root = None

    def search(self, value: int): 
        found_node = self._search(self.root, value)
        if found_node == None:
            return False
        return True

    def delete(self, value):
        pass

    # def print_tree(self):
    #     while (self.root.left != None):         
    #         print(self.root.left.value)
    #         if self.root.left != None:
    #             self.root.left = self.root.left.left                  

    #     while(self.root.right != None):  
    #         print(self.root.right.value)   
    #         if self.root.right != None:                            
    #             self.root.right = self.root.right.right
        
            

    def max_value(self):
        pass

    def min_value(self):
        pass

    def insert(self, value):

        if self.root is None: 
            self.root = Node(value)        
            return
        
        return self._insert(self.root, value)

    #def _insert_with_search(self, value):
        
        #found_node = self._search(self.root, value)

        #2 scenarios
        #1 scenario: no such value in the Tree
        #found_node.parent = 

    def _insert(self, current_node, value):
        #Reminder: is equals to ==

        #go right
        if value > current_node.value:
            #add to the right leaf if absent
            if current_node.right is None:
                current_node.right = Node(value, current_node)
                return
            # search for a proper postition in right branch
            return self._insert(current_node.right, value)        
        else:
            #add to the left leaf if absent
            if current_node.left is None:
                current_node.left = Node(value, current_node)
                return
            # search for a proper position in right branch
            return self._insert(current_node.left, value)

    def _search(self, node_to_check, value):
        
        #if no more nodes, parent = leaf
        #or we found: search value is equal to the node
        if (node_to_check == None) or (node_to_check.value == value):
            return node_to_check
            
        if value > node_to_check.value:
            #go right
            return self._search(node_to_check.right, value)
        else:
            #go left
            return self._search(node_to_check.left, value)



class Node:

    def __init__(self, value, parent = None):
        self.right = None
        self.left = None
        self.parent = None
        self.value = value

    def print_tree(self):
        if (self.left != None):            
            self.left.print_tree()
        print(self.value)
        if (self.right != None):                        
            self.right.print_tree()

                #15
                
        #6              #23 

    #4      #7                #71

        #5              #50


tree = Tree()
tree.insert(15)
tree.insert(6)
tree.insert(7)
tree.insert(4)
tree.insert(5)
tree.insert(23)
tree.insert(71)
tree.insert(50)

print(tree.search(10))
print(tree.search(8))
print(tree.search(6))
print(tree.search(6000))
print(tree.search(1))

tree.root.print_tree()
#tree.print_tree()