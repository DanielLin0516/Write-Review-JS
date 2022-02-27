function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
let root = new TreeNode(1);
let root1 = new TreeNode(2);
let root2 = new TreeNode(3);
let root3 = new TreeNode(5);
root.left = root1;
root.right = root2;
root1.right = root3;

const preOrder = (root) => {
    if(root === null) return null;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}
const preorder = (root) => {
    if(root == null) return;
}
preOrder(root)