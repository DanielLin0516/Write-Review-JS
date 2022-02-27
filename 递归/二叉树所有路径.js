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
var binaryTreePaths = function(root) {
    const paths = [];
    function newFunc(root,path){
        if(root == null) return;
        if(root.left === null && root.right === null){
            path.push(root.val);
            paths.push(path.join(""));
        }else{
            path.push(root.val + "->");
        }
        newFunc(root.left,path);
        newFunc(root.right,path);
        path.pop();
    }
    newFunc(root,[]);
    return paths;
};
console.log(binaryTreePaths(root));
