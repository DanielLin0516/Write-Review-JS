function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
let root = new TreeNode(1);
let root1 = new TreeNode(2);
let root2 = new TreeNode(3);
let root3 = new TreeNode(4);
let root4 = new TreeNode(2);
let root5 = new TreeNode(4);
let root6 = new TreeNode(4);
root.left = root1;
root.right = root2;
root2.left = root4;
root2.right = root6;
root4.left = root5
root1.left = root3;

var findDuplicateSubtrees = function (root) {
    // 记录所有子树以及出现的次数
    const memo = new Map();
    // 记录重复的子树根节点
    const res = [];

    const traverse = (node) => {
        // 对于空节点，可以用一个特殊字符表示
        if (!node) {
            return "#";
        }
        // 将左右子树序列化成字符串，左右子树加上自己，就是以自己为根的二叉树序列化结果
        const key = node.val + "," + traverse(node.left) + traverse(node.right);
        console.log(key);
        // 让每个节点把自己的序列化结果存进去，对于每个节点，就可以知道有没有其他节点的子树和自己重复了
        let freq = memo.get(key) || 0;
        // 多次重复也只会被加入结果集一次
        if (freq == 1) {
            // 有人和我重复，把自己加入结果列表
            res.unshift(node);
        }
        // 给子树对应的出现次数加一
        memo.set(key, freq + 1);
        return key;
    };

    traverse(root);
    return res;
}