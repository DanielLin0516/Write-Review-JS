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
// var maxDepth = function (root) {
//     if(root == null) return 0;
//     let left = maxDepth(root.left);
//     let right = maxDepth(root.right);
//     return Math.max(left,right) + 1;
// };
// maxDepth(root);
const maxDepth = function(root) {
    let depth = 0;
    let res = 0;
    const traverse = function(root) {
        if(root === null) {
            res = Math.max(depth,res);
            return;
        }
        depth++;
        traverse(root.left);
        traverse(root.right);
        depth--;
    }
    traverse(root);
    return res;
}
console.log(maxDepth(root)) 