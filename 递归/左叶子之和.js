function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
let root = new TreeNode(3);
let root1 = new TreeNode(9);
let root2 = new TreeNode(20);
let root3 = new TreeNode(15);
let root4 = new TreeNode(7);
root.left = root1;
root.right = root2;
root2.right = root4;
root2.left = root3;
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const dfs = (root) => {
        if (root == null) return;
        // 是左子节点  并且左子节点的左右节点都为空 也就是说是叶子节点
        if (
            root.left != null &&
            root.left.left == null &&
            root.left.right == null
        ) {
            // 找到左侧的叶子节点，记录累加值
            sum += root.left.val;
        }
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return sum;
};

console.log(sumOfLeftLeaves(root));